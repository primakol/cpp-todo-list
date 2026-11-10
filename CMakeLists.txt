cmake_minimum_required(VERSION 3.20)
project(Planner1)

set(CMAKE_CXX_STANDARD 17)

include_directories(${CMAKE_CURRENT_SOURCE_DIR})
link_directories(${CMAKE_CURRENT_SOURCE_DIR})

add_executable(Planner1
        Planner1.cpp
        imgui.cpp
        imgui_demo.cpp
        imgui_draw.cpp
        imgui_tables.cpp
        imgui_widgets.cpp
        imgui_impl_glfw.cpp
        imgui_impl_opengl3.cpp
)

target_compile_definitions(Planner1 PRIVATE GLFW_DLL)

target_link_libraries(Planner1
        glfw3dll
        opengl32
        gdi32
)

add_custom_command(TARGET Planner1 POST_BUILD
        COMMAND ${CMAKE_COMMAND} -E copy_if_different
        "${CMAKE_CURRENT_SOURCE_DIR}/glfw3.dll"
        $<TARGET_FILE_DIR:Planner1>)