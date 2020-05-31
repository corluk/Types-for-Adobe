declare namespace ExtendedProperty {
    interface Generic<T extends PropertyValue> extends Property{

        setValue(newValue: T): void
        valueAtTime(time: number, preExpression: boolean): T
    
        /** Sets the static value of the property. */
        setValue(newValue: T): void
      
        /** Creates a keyframe for the property. */
        setValueAtTime(time: number, newValue: T): void
      
        /** Creates a set of keyframes for the property. */
        setValuesAtTimes(times: number[], newValues: T[]): void
      
        /** Finds a keyframe and sets the value of the property at that keyframe. */
        setValueAtKey(keyIndex: number, newValue: T): void

    }



}

declare namespace asProperty{

        interface SourceText extends ExtendedProperty.Generic<TextDocument> {} 
        interface Scale extends ExtendedProperty.Generic<[number,number]> {} 


}

declare namespace Layerto {

        interface Textable  extends TextLayer {
            sourceText? : asProperty.SourceText
        }
        interface Transforable extends Layer {
            scale : asProperty.SourceText
        }



}


 
