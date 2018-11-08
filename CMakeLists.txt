cmake_minimum_required(VERSION 3.0.0)

#set(CMAKE_C_FLAGS "-O2 -Wall")

if (EMSCRIPTEN)
  set(CMAKE_C_FLAGS "-O0 -Wall --pre-js ../src/pre.js --post-js ../src/post.js -s FS_LOG=1 -s MODULARIZE=1 -s EXTRA_EXPORTED_RUNTIME_METHODS=['FS']")
endif()

file(GLOB SOURCES "src/*.c")

add_executable(example ${SOURCES})
