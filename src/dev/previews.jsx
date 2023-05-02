// eslint-disable-next-line no-unused-vars
import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {ExampleLoaderComponent, PaletteTree} from './palette'

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ExampleLoaderComponent">
                <ExampleLoaderComponent/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews