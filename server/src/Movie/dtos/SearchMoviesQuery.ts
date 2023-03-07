import { IsOptional, IsString } from "class-validator";

export class SearchMoviesQuery {
    @IsOptional()
    @IsString()
    title?: string;
}
