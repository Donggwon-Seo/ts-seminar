import Bird from "./bird";
import Fish from "./fish";

type Animal = Bird | Fish;

export const flyOrSwim = (animal: Animal): void => {
    if (animal instanceof Bird) {
        //(animal as Bird).fly() >> 타입 가드가 없다면
        animal.fly();
    } else if (animal instanceof Fish) {
        animal.swim();
    }
};