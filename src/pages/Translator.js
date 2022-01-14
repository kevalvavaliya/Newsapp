import React from 'react';
import FormComponent from './FormComponent';

const Translator = () => {
    return (
        <div>
            <FormComponent title="Translator" buttonText="Translate" description="Input Text to Translate" functionality={false} inputTextTitle="Translated Text in French"/>
        </div>
    )
}

export default Translator
