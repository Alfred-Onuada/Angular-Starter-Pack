import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToSpaces', // similar to selector in components its the name used in the htm;
})
export class convertToSpacesPipe implements PipeTransform {
  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }
}