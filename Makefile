.PHONY: build build-bin clean

build:
	@mkdir -p build/
	@cd build/ && emcmake cmake .. && make

build-bin:
	@mkdir -p build-bin/
	@cd build-bin/ && cmake .. && make

clean:
	@rm -rf build/ build-bin/
