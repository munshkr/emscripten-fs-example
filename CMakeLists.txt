cmake_minimum_required(VERSION 3.0.0)

set(CMAKE_C_FLAGS "-Wall")

if (EMSCRIPTEN)
  set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} --pre-js ../src/pre.js --post-js ../src/post.js -s MODULARIZE=1 -s SINGLE_FILE=1")
endif()

set(CMAKE_C_FLAGS_DEBUG "${CMAKE_C_FLAGS_DEBUG} -O0")
set(CMAKE_C_FLAGS_RELEASE "${CMAKE_C_FLAGS_RELEASE} -O2")

file(GLOB SOURCES "src/*.c")

add_executable(example ${SOURCES})
