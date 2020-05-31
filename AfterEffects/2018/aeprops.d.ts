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

        interface TextDoc  extends ExtendedProperty.Generic<TextDocument> {} 
        interface twoD extends ExtendedProperty.Generic<[number,number]> {} 
        interface threeD extends ExtendedProperty.Generic<[number,number,number]> {} 
        interface fourD extends ExtendedProperty.Generic<[number,number,number,number]> {} 
        interface Nullable extends ExtendedProperty.Generic<void> {} 
        interface Boolean  extends ExtendedProperty.Generic<boolean> {} 
        interface Number  extends ExtendedProperty.Generic<number> {} 
        interface Marker extends ExtendedProperty.Generic<MarkerValue> {} 
        interface ShapeValue extends ExtendedProperty.Generic<Shape> {} 

    



}

declare namespace castLayer  {

        interface Textable  extends TextLayer {
            sourceText? : asProperty.TextDoc 
        }
        interface Transformable extends Layer {
            scale : asProperty.twoD
        }



}


 
