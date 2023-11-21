#include <iostream>
#include <memory>
#include <cstring>

class Shape {
public:
    virtual void draw() = 0;
    virtual ~Shape() {} 
};

class Circle : public Shape {
public:
    void draw() override {
        std::cout << "Circle" << std::endl;
    }
};

class Square : public Shape {
public:
    void draw() override {
        std::cout << "Square" << std::endl;
    }
};

class Triangle : public Shape {
public:
    void draw() override {
        std::cout << "Triangle" << std::endl;
    }
};

class ShapeFactory {
public:
    std::unique_ptr<Shape> createShape(const char* x) {
        if (std::strcmp(x, "Circle") == 0) {
            return std::unique_ptr<Shape>(new Circle());
        }

        if (std::strcmp(x, "Square") == 0) {
            return std::unique_ptr<Shape>(new Square());
        }

        if (std::strcmp(x, "Triangle") == 0) {
            return std::unique_ptr<Shape>(new Triangle());
        }

        return nullptr; 
    }
};

int main() {
    ShapeFactory shapeFactory;


    std::unique_ptr<Shape> circle = shapeFactory.createShape("Circle");
    if (circle) circle->draw();

    std::unique_ptr<Shape> square = shapeFactory.createShape("Square");
    if (square) square->draw();

    std::unique_ptr<Shape> triangle = shapeFactory.createShape("Triangle");
    if (triangle) triangle->draw();

    return 0;
}
