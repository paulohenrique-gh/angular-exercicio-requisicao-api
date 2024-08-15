import { Destination } from "./destination.model";

export interface Trip {
    id: number;
    title: string;
    startDate: string;
    endDate: string;
    imageUrl: string;
    destination: Destination;
}

