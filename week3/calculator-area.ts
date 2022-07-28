import {IShape} from "./shape";

export const calculatorArea = (shape: IShape): number => {
    switch (shape.tag) {
        case 'square':
            return shape.side * shape.side;
        case 'rectangle':
            return shape.height * shape.width;
        case "circle":
            return Math.PI * shape.radius * shape.radius;
    }
    return 0;
}