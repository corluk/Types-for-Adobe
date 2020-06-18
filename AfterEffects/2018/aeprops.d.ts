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
declare namespace ExtendedLayer {
    interface Generic2dLayer extends Layer {

        scale : asProperty.twoD
        opacity : asProperty.Number 
        position : asProperty.twoD
        rotation: asProperty.twoD
        anchorPoint : asProperty.twoD
      

        
    }
    interface Generic3dLayer extends Layer {

        scale : asProperty.threeD
        opacity : asProperty.Number 
        position : asProperty.threeD
        rotationz : asProperty.Number
        anchorPoint : asProperty.threeD
        xRotation : asProperty.Number 
        yRotation : asProperty.Number 
        zRotation : asProperty.Number  
        orientation : asProperty.threeD
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
        interface Transformable extends ExtendedLayer.Generic2dLayer {
             
            
        }
        interface Transformable3D extends ExtendedLayer.Generic3dLayer {
            
        }




}

declare namespace Effects {

        interface AudioSpectrum {

            "Audio Layer" : Number 
            "Start Point" : Number 
            "End Point" : Number 
        
        }
        interface AddGrain {
            "Viewing Mode" : Property 
            "Preset" : Property
        }


 
