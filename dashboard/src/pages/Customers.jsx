import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, contextMenuItems, customersGrid } from '../data/dummy';
import {Header} from '../components'

function Customers() {
    return (
        <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
            <Header category='Page' title='Customers' />

            <GridComponent
                id='gridcomp'
                dataSource={customersData}
                enableHover={false}
                allowPaging
                pageSettings={{pageCount: 5}}
                allowSorting
                selectionSettings={{persistSelection: true}}
                editSettings={{allowDeleting: true, allowEditing: true}}
                toolbar={['Delete']}
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
                </ColumnsDirective>

                <Inject services={[Sort, Filter, Page, Edit, Selection, Toolbar]} />
            </GridComponent>
        </div>
    )
}

export default Customers
