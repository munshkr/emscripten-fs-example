cmake_minimum_required(VERSION 3.0.0)

set(CMAKE_C_FLAGS "-O2 -Wall")

if (EMSCRIPTEN)
  set(CMAKE_C_FLAGS "-O0 -Wall -s MODULARIZE=1")
endif()

file(GLOB SOURCES "src/*.c")

add_executable(example ${SOURCES})
