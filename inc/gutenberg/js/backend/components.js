import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { useState, useEffect } from 'react';

const MarginControl = ({value,onChange}) => {
    const [ margin, setMargin ] = useState( value ?? {top: 0, right: 0, bottom: 0, left: 0} );

    useEffect(() =>{
        onChange(margin);
    }, [margin]);

    return (
        <div className="workingspace gutenberg-components--margin-control">
            <div className="margin-container top">
                <div className="label">
                    <NumberControl
                        isShiftStepEnabled={ true }
                        onChange={ value => setMargin({...margin, top: +value})}
                        shiftStep={ 1 }
                        value={ margin?.top }
                    />
                </div>
            </div>

            <div className="margin-container right">
                <div className="label">
                    <NumberControl
                        isShiftStepEnabled={ true }
                        onChange={ value => setMargin({...margin, right: +value}) }
                        shiftStep={ 1 }
                        value={ margin?.right }
                    />
                </div>
            </div>

            <div className="margin-container bottom">
                <div className="label">
                    <NumberControl
                        isShiftStepEnabled={ true }
                        onChange={ value => setMargin({...margin, bottom: +value}) }
                        shiftStep={ 1 }
                        value={ margin?.bottom }
                    />
                </div>
            </div>

            <div className="margin-container left">
                <div className="label">
                    <NumberControl
                        isShiftStepEnabled={ true }
                        onChange={ value => setMargin({...margin, left: +value}) }
                        shiftStep={ 1 }
                        value={ margin?.left }
                    />
                </div>
            </div>
        </div>
    )
}

export {MarginControl};