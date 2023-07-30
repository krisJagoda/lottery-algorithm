import { DrawAlgorithm } from "../../algorithms/interface";

export class EmptyAlgotithm extends DrawAlgorithm {
    drawNumber(): number {
        throw new Error("Method not implemented.");
    }
}