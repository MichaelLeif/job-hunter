import { stageType } from "./stageTypes";

export default interface JobType {
    id: number;
    company: string;
    role: string;
    stage: stageType;
    confidence: number;
    userId: string;
}