import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

function SparkLine({ id, height, width, color, data, type, currentColor }) {
    return (
        <SparklineComponent
            id={id}
            type={type}
            height={height}
            width={width}
            fill={color}
            dataSource={data}
            lineWidth={1}
            valueType='Numeric'
            border={{ color: 'blue', width: 2 }}
            xName='x'
            yName='yval'
            tooltipSettings={{
                visible: true,
                // eslint-disable-next-line no-template-curly-in-string
                format: '${x} : data ${yval}',
                trackLineSettings: {
                    visible: true,
                },
            }}
            markerSettings={{ visible: ['All'], size: 2.5, fill: currentColor }}
        >
            <Inject services={[SparklineTooltip]} /> 
        </SparklineComponent>
    )
}

export default SparkLine
