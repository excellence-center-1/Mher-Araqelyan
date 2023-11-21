#include <iostream>
#include <memory>
#include <cstring>
using namespace std;
class Cloneable {
public:
    virtual ~Cloneable() {}
    virtual Cloneable* clone() const = 0;
};

class Shape : public Cloneable {
public:
    int x, y;

    Shape() : x(0), y(0) {}

    Shape(const Shape& obj) : x(obj.x), y(obj.y) {}

    virtual void draw() = 0;

    Cloneable* clone() const override {
        return new Shape(*this);
    }
};

class Circle : public Shape {
public:
    int radius;

    Circle() : Shape(), radius(0) {}

    Circle(const Circle& obj) : Shape(obj), radius(obj.radius) {}

    void draw() override {
        std::cout << "Circle" << std::endl;
    }

    Cloneable* clone() const override {
        return new Circle(*this);
    }
};

class Triangle : public Shape {
public:
    int per;

    Triangle() : per(0) {}

    Triangle(const Triangle& obj) : Shape(obj), per(obj.per) {}

    void draw() override {
        std::cout << "Triangle" << std::endl;
    }

    Cloneable* clone() const override {
        return new Triangle(*this);
    }
};

class ShapeFactory {
public:
    std::unique_ptr<Shape> createShape(const char* x) {
        if (std::strcmp(x, "Circle") == 0) {
            return std::unique_ptr<Shape>(new Circle());
        }
        if (std::strcmp(x, "Triangle") == 0) {
            return std::unique_ptr<Shape>(new Triangle());
        }
        return nullptr;
    }
};

int main() {
    Circle circle;
    
    Cloneable* anotherCircle = circle.clone();

    Shape* anotherShape = dynamic_cast<Shape*>(anotherCircle);

    if (anotherShape) {
        anotherShape->draw();
    } 

    delete anotherCircle; 

    return 0;
}
