import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements ControlValueAccessor {
  
  @Input() classeCss:any;
  @Input() id!:string;
  @Input() label!:string;
  @Input() type: string = 'text';
  @Input() control!: any;
  @Input() error: boolean = false;


  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

}
