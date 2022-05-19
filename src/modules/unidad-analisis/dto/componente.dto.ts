import { ApiProperty } from "@nestjs/swagger";

export class ComponenteDto {
    @ApiProperty()
    idComponente: number;
}