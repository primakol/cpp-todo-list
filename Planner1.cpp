
#include "glfw3.h"
#include "imgui.h"
#include "imgui_impl_glfw.h"
#include "imgui_impl_opengl3.h"
#include <vector>
#include <string>

struct Task {
    std::string title;
    std::string subtitle;
    std::string category;
    std::string time;
    bool is_completed;
};

void ApplyTheme() {
    ImGuiStyle& style = ImGui::GetStyle();
    style.WindowRounding = 16.0f;
    style.ChildRounding = 16.0f;
    style.FrameRounding = 8.0f;
    style.PopupRounding = 8.0f;
    style.Colors[ImGuiCol_ChildBg] = ImVec4(1.00f, 1.00f, 1.00f, 1.00f);
    style.Colors[ImGuiCol_Border] = ImVec4(0.93f, 0.95f, 0.96f, 1.0f);
    style.Colors[ImGuiCol_Text] = ImVec4(0.12f, 0.11f, 0.29f, 1.0f);
    style.Colors[ImGuiCol_FrameBg] = ImVec4(0.96f, 0.95f, 1.0f, 1.0f);
    style.Colors[ImGuiCol_Button] = ImVec4(0.19f, 0.18f, 0.51f, 1.0f);
    style.Colors[ImGuiCol_CheckMark] = ImVec4(0.26f, 0.22f, 0.79f, 1.0f);
}

void DrawPlanner() {
    static std::vector<Task> tasks = {
        {"Finalize the website proposal", "Review the scope and send it to the client", "Work", "10:00 AM", false},
        {"Plan next week's priorities", "Make space for the big ideas", "Work", "11:30 AM", false},
        {"Read 20 pages", "Atomic Habits - Chapter 4", "Learning", "1:00 PM", false},
        {"Book a dentist appointment", "A little life admin", "Personal", "4:00 PM", false},
        {"Morning stretch & a glass of water", "A good start to a good day", "Personal", "8:00 AM", true}
    };

    ImGui::SetNextWindowPos(ImVec2(0, 0));
    ImGui::SetNextWindowSize(ImGui::GetIO().DisplaySize);
    ImGuiWindowFlags window_flags = ImGuiWindowFlags_NoTitleBar | ImGuiWindowFlags_NoResize | ImGuiWindowFlags_NoMove | ImGuiWindowFlags_NoBackground;

    ImGui::Begin("PlannerBackground", nullptr, window_flags);
    ImGui::PushStyleColor(ImGuiCol_WindowBg, ImVec4(0.97f, 0.98f, 0.99f, 1.0f));

    ImGui::Text("TUESDAY, NOVEMBER 10");
    ImGui::Text("My day");
    ImGui::Text("Make room for what matters. One task at a time.");

    ImGui::Columns(2, "MainLayout", false);
    ImGui::SetColumnWidth(0, ImGui::GetWindowWidth() * 0.65f);

    {
        ImGui::BeginChild("ProgressCard", ImVec2(0, 100), true);
        ImGui::Text("Today's progress");
        ImGui::Text("33%% (2 of 6 tasks complete)");
        ImGui::EndChild();

        ImGui::BeginChild("TasksCard", ImVec2(0, 0), true);
        ImGui::Text("Today's tasks (6 tasks)");

        ImGui::BeginChild("InputForm", ImVec2(0, 80), true);
        static char task_buf[128] = "";
        ImGui::InputText("##newTask", task_buf, IM_ARRAYSIZE(task_buf));
        ImGui::SameLine();
        if (ImGui::Button("+ Add task")) {}
        ImGui::EndChild();

        for (auto& task : tasks) {
            if (task.is_completed) ImGui::PushStyleVar(ImGuiStyleVar_Alpha, 0.5f);

            ImGui::Checkbox(("##check" + task.title).c_str(), &task.is_completed);
            ImGui::SameLine();

            ImGui::BeginGroup();
            ImGui::Text("%s", task.title.c_str());
            ImGui::Text("%s", task.subtitle.c_str());
            ImGui::EndGroup();

            if (task.is_completed) ImGui::PopStyleVar();
            ImGui::Separator();
        }
        ImGui::EndChild();
    }

    ImGui::NextColumn();

    {
        ImGui::BeginChild("CalendarCard", ImVec2(0, 240), true);
        ImGui::Text("November 2026");
        ImGui::Columns(7, "CalendarGrid", false);
        const char* days[] = {"M", "T", "W", "T", "F", "S", "S"};
        for (int i = 0; i < 7; i++) ImGui::Text("%s", days[i]);
        ImGui::NextColumn();
        for (int i = 1; i <= 22; i++) {
            if (i == 10) {
                ImGui::Button("10", ImVec2(25, 25));
            } else {
                ImGui::Text("%d", i);
            }
            ImGui::NextColumn();
        }
        ImGui::Columns(1);
        ImGui::EndChild();
    }

    ImGui::PopStyleColor();
    ImGui::End();
}

int main() {
    if (!glfwInit()) return -1;

    GLFWwindow* window = glfwCreateWindow(1280, 800, "Demak - My Day Planner", NULL, NULL);
    if (!window) { glfwTerminate(); return -1; }
    glfwMakeContextCurrent(window);
    glfwSwapInterval(1);

    IMGUI_CHECKVERSION();
    ImGui::CreateContext();
    ImGui_ImplGlfw_InitForOpenGL(window, true);
    ImGui_ImplOpenGL3_Init("#version 130");

    ApplyTheme();

    while (!glfwWindowShouldClose(window)) {
        glfwPollEvents();

        ImGui_ImplOpenGL3_NewFrame();
        ImGui_ImplGlfw_NewFrame();
        ImGui::NewFrame();

        int display_w, display_h;
        glfwGetFramebufferSize(window, &display_w, &display_h);
        ImGui::GetIO().DisplaySize = ImVec2((float)display_w, (float)display_h);

        DrawPlanner();

        ImGui::Render();
        glViewport(0, 0, display_w, display_h);
        glClearColor(0.97f, 0.98f, 0.99f, 1.0f);
        glClear(GL_COLOR_BUFFER_BIT);
        ImGui_ImplOpenGL3_RenderDrawData(ImGui::GetDrawData());

        glfwSwapBuffers(window);
    }

    ImGui_ImplOpenGL3_Shutdown();
    ImGui_ImplGlfw_Shutdown();
    ImGui::DestroyContext();
    glfwDestroyWindow(window);
    glfwTerminate();

    return 0;
}
