export default interface JobType {
    id: number;
    company: string;
    role: string;
    stage: string | null;
    confidence: number | null;
    userId: string;
}