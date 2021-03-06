/**
 * ux-grid Attributes（表格属性）
 */
export const columns = [
    {prop: 'parameter', label: '参数', width: 200},
    {prop: 'explain', label: '说明', minWidth: 200},
    {prop: 'type', label: '类型', width: 150},
    {prop: 'optionalValue', label: '可选值', width: 200},
    {prop: 'defaultValue', label: '默认值', width: 200}
]
// ux-grid属性的数据
export const data = [
    {
        parameter: 'data', type: 'array', optionalValue: '—', defaultValue: '—',
        explain: '表格数据',
    },
    {
        parameter: 'columns', type: 'array', optionalValue: '—', defaultValue: '—',
        explain: '列配置, 它用来jsx模式自定义列。你可以看虚拟表格部分的jsx自定义实例。列上的属性如同ux-table-column',
    },
    {
        parameter: 'height',
        explain: '表格高度（不给高度，那么就是自适应高度；)',
        type: 'string/number', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'max-height',
        explain: 'Table 的最大高度。合法的值为数字',
        type: 'string/number', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'border',
        explain: '是否显示纵向边框',
        type: 'boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'size',
        explain: 'Table 的尺寸',
        type: 'String', optionalValue: 'medium / small / mini', defaultValue: '—',
    },
    {
        parameter: 'show-summary',
        explain: '是否需要合计',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'show-header',
        explain: '是否显示表头',
        type: 'boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'highlight-current-row',
        explain: '是否要高亮当前行',
        type: 'boolean', optionalValue: '—', defaultValue: 'true',
    },
    {
        parameter: 'stripe',
        explain: '是否为斑马纹',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'span-method',
        explain: '合并行或列的计算方法',
        type: 'Function', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'summary-method',
        explain: '自定义的合计计算方法',
        type: 'Function({ columns, data }) 返回一个二维合计数组： [[]: // 这个是合计的数组]', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'row-class-name',
        explain: '行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className',
        type: 'Function({row, rowIndex})/String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'row-style',
        explain: '行的 style 的回调方法',
        type: 'Function({row, rowIndex})/Object', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'cell-class-name',
        explain: '行单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className',
        type: 'Function({row, column, rowIndex, columnIndex})/String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'cell-style',
        explain: '行单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style',
        type: 'Function({row, column, rowIndex, columnIndex})/Object', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'header-row-class-name',
        explain: '表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className',
        type: 'Function({$rowIndex})/String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'header-row-style',
        explain: '表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。',
        type: 'Function({$rowIndex, column, columnIndex, $columnIndex}})/Object', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'header-cell-class-name',
        explain: '表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className',
        type: 'Function({$rowIndex, column, columnIndex, $columnIndex})/String', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'header-cell-style',
        explain: '表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style',
        type: 'Function({$rowIndex, column, columnIndex, $columnIndex})/Object', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'default-sort',
        explain: '默认的排序列的 field和顺序。它的field属性指定默认的排序的列,order指定默认排序的顺序',
        type: 'Object', optionalValue: 'order: asc, desc', defaultValue: '',
    },
    {
        parameter: 'empty-text',
        explain: '空数据时显示的文本内容,也可以通过 slot="empty" 设置',
        type: 'String', optionalValue: '—', defaultValue: '暂无数据',
    },
    {
        parameter: 'sort-method',
        explain: '全局排序方法，当触发排序时会调用该函数 Function({ data, column, property, order }) 返回排序后的列表',
        type: 'Function', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'keep-source',
        explain: '保持原始值的状态，被某些功能所依赖，比如编辑状态、还原数据等（开启后性能直线下降，具体取决于数据量）',
        type: 'boolean', optionalValue: '—', defaultValue: '—',
    },
    {
        parameter: 'show-header-overflow',
        explain: '设置表头所有内容过长时显示为省略号',
        type: 'boolean/string', optionalValue: 'ellipsis（只显示省略号, 默认）,title（并且显示为原生 title）', defaultValue: '—',
    },
    {
        parameter: 'show-overflow',
        explain: '设置所有内容过长时显示为省略号',
        type: 'boolean/string', optionalValue: 'ellipsis（只显示省略号, 默认）,title（并且显示为原生 title）, tooltip（并且显示为 tooltip 提示）', defaultValue: '—',
    },
    {
        parameter: 'rowKey',
        explain: '是否需要为每一行的 VNode 设置 key 属性（非特殊情况下没必要设置）',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'columnKey',
        explain: '是否需要为每一列的 VNode 设置 key 属性（非特殊情况下不需要使用, 常用于拖拽列）',
        type: 'boolean', optionalValue: '—', defaultValue: 'false',
    },
    {
        parameter: 'rowId',
        explain: '自定义行数据唯一主键的字段名（行数据必须要有唯一主键，默认自动生成）',
        type: 'String', optionalValue: '—', defaultValue: '_XID',
    },
    {
        parameter: 'checkbox-config',
        explain: '复选框配置项',
        type: '—', optionalValue: '—', defaultValue: '—',
        children: [
            {
                parameter: 'checkField', explain: '渲染速度更快（建议数据量大时使用，行数据中必须存在该字段，否则无效）',
                type: 'string', optionalValue: '—', defaultValue: "—",
            },
            {
                parameter: 'showHeader', explain: '是否显示全选按钮',
                type: 'boolean', optionalValue: '—', defaultValue: "true",
            },
            {
                parameter: 'checkAll', explain: '默认勾选所有（只会在初始化时被触发一次）',
                type: 'boolean', optionalValue: '—', defaultValue: "false",
            },
            {
                parameter: 'checkRowKeys', explain: '默认勾选开指定行（只会在初始化时被触发一次，需要有 row-id）',
                type: 'Array', optionalValue: '—', defaultValue: "—",
            },
            {
                parameter: 'checkMethod', explain: '是否允许勾选的方法，该方法 Function({row}) 的返回值用来决定这一行的 checkbox 是否可以勾选',
                type: 'Array', optionalValue: '—', defaultValue: "—",
            },
            {
                parameter: 'highlight', explain: '高亮勾选行',
                type: 'boolean', optionalValue: '—', defaultValue: "false",
            },
            {
                parameter: 'trigger', explain: '触发方式',
                type: 'string', optionalValue: 'default（默认）, cell（点击单元格触发）, row（点击行触发）', defaultValue: "default",
            }
        ]
    },
    {
        parameter: 'edit-config',
        explain: '可编辑配置项',
        type: '—', optionalValue: '—', defaultValue: '—',
        children: [
            {
                parameter: 'trigger', explain: '触发方式',
                type: 'string', optionalValue: 'manual（手动触发方式，只能用于 mode=row）,click（点击触发编辑）,dblclick（双击触发编辑）', defaultValue: "click",
            },
            {
                parameter: 'mode', explain: '编辑模式(作用对象)',
                type: 'string', optionalValue: 'cell（单元格）,row（行）', defaultValue: "cell",
            },
            {
                parameter: 'showIcon', explain: '是否显示列头编辑图标',
                type: 'boolean', optionalValue: '—', defaultValue: "true",
            },
            {
                parameter: 'autoClear', explain: '当点击非编辑列之后，是否自动清除单元格的激活状态',
                type: 'boolean', optionalValue: '—', defaultValue: "true",
            },
            {
                parameter: 'activeMethod', explain: '该方法 Function({row, rowIndex, column, columnIndex}) 的返回值用来决定该单元格是否允许编辑',
                type: 'Function', optionalValue: '—', defaultValue: "—",
            },
            {
                parameter: 'icon', explain: '自定义可编辑列的状态图标',
                type: 'string', optionalValue: '—', defaultValue: "—",
            }
        ]
    },
    {
        parameter: 'expand-config',
        explain: '展开行配置项',
        type: '—', optionalValue: '—', defaultValue: '—',
        children: [
            {
                parameter: 'labelField',
                explain: '展开列显示的字段名，可以直接显示在单元格中',
                type: 'string', optionalValue: '—', defaultValue: '—',
            },
            {
                parameter: 'expandAll',
                explain: '默认展开所有行（只会在初始化时被触发一次）',
                type: 'boolean', optionalValue: '—', defaultValue: '—',
            },
            {
                parameter: 'expandRowKeys',
                explain: '默认展开指定行（只会在初始化时被触发一次，需要有 row-id）',
                type: 'string[] 如["1", "2"]', optionalValue: '—', defaultValue: '—',
            },
            {
                parameter: 'accordion',
                explain: '每次只能展开一行',
                type: 'boolean', optionalValue: '—', defaultValue: '—',
            },
            {
                parameter: 'trigger',
                explain: '触发方式',
                type: 'string', optionalValue: 'default（点击展开按钮触发）, cell（点击单元格触发）, row（点击行触发）', defaultValue: 'default',
            }
        ]
    }
]
/**
 * ux-grid Events（表格事件）
 */
export const columnsEvents = [
    {prop: 'eventName', label: '事件名', width: 200},
    {prop: 'explain', label: '说明', minWidth: 200},
    {prop: 'parameter', label: '参数', width: 250}
]
export const eventsData = [
    {
        eventName: 'select-all',
        explain: '当用户手动勾选全选 Checkbox 时触发的事件',
        parameter: 'selection'
    },
    {
        eventName: 'select',
        explain: '当用户手动勾选数据行的 Checkbox 时触发的事件',
        parameter: 'selection, row'
    },
    {
        eventName: 'selection-change',
        explain: '当选择项发生变化时会触发该事件',
        parameter: 'selection'
    },
    {
        eventName: 'row-dblclick',
        explain: '当某一行被双击时会触发该事件',
        parameter: 'row, column, event'
    },
    {
        eventName: 'cell-mouse-enter',
        explain: '当单元格 hover 进入时会触发该事件',
        parameter: 'row, column, cell, event'
    },
    {
        eventName: 'cell-mouse-leave',
        explain: '当单元格 hover 退出时会触发该事件',
        parameter: 'row, column, cell, event'
    },
    {
        eventName: 'cell-click',
        explain: '当某个单元格被点击时会触发该事件',
        parameter: 'row, column, cell, event'
    },
    {
        eventName: 'cell-dblclick',
        explain: '当某个单元格被双击击时会触发该事件',
        parameter: 'row, column, cell, event'
    },
    {
        eventName: 'row-contextmenu',
        explain: '当某一行被鼠标右键点击时会触发该事件',
        parameter: 'row, column, event'
    },
    {
        eventName: 'header-click',
        explain: '当某一列的表头被点击时会触发该事件',
        parameter: 'column, event'
    },
    {
        eventName: 'header-contextmenu',
        explain: '当某一列的表头被鼠标右键点击时触发该事件',
        parameter: 'column, event'
    },
    {
        eventName: 'current-change',
        explain: '当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性',
        parameter: 'row'
    },
    {
        eventName: 'expand-change',
        explain: '当用户对某一行展开或者关闭的时候会触发该事件',
        parameter: '{expanded, row, rowIndex, $rowIndex, column, columnIndex, $columnIndex, $event}'
    },
    {
        eventName: 'row-click',
        explain: '当某一行被点击时会触发该事件',
        parameter: 'row, column, event'
    },
    {
        eventName: 'header-dragend',
        explain: '当拖动表头改变了列的宽度的时候会触发该事件',
        parameter: '{ $rowIndex, column, columnIndex, $columnIndex, $event }'
    },
    {
        eventName: 'table-body-scroll',
        explain: '当表体滚动时触发，无论横向还是竖向',
        parameter: '{scrollTop， scrollLeft}, event'
    },
    {
        eventName: 'sort-change',
        explain: '当表格的排序条件发生变化的时候会触发该事件',
        parameter: '{ column, prop, order }'
    },
    {
        eventName: 'filter-change',
        explain: '当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。',
        parameter: '{ column, property, values, datas, filters, $event }'
    },
    {
        eventName: 'edit-closed',
        explain: '只对 edit-config 配置时有效，单元格编辑状态下被关闭时会触发该事件',
        parameter: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }'
    },
    {
        eventName: 'edit-actived',
        explain: '只对 edit-config 配置时有效，单元格被激活编辑时会触发该事件',
        parameter: '{ row, rowIndex, $rowIndex, column, columnIndex, $columnIndex }'
    },
]
/**
 * ux-grid Methods（表格方法）
 */
export const columnsMethods = [
    {prop: 'methodsName', label: '方法名', width: 200},
    {prop: 'explain', label: '说明', minWidth: 200},
    {prop: 'parameter', label: '参数', width: 250}
]
export const methodsData = [
    {
        methodsName: 'toggleAllSelection',
        explain: '用于多选表格，切换所有行的选中状态',
        parameter: '—'
    },
    {
        methodsName: 'clearSelection',
        explain: '用于表格多选，清空用户的选择',
        parameter: '—'
    },
    {
        methodsName: 'toggleRowSelection',
        explain: '用于表格多选，切换某一行的选中状态。obj如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
        parameter: 'rows 格式: [{  row: row, selected: true || false }]'
    },
    {
        methodsName: 'toggleRowSelection',
        explain: '用于表格多选，切换某一行的选中状态。obj如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）',
        parameter: 'rows 格式: [{  row: row, selected: true || false }]'
    },
    {
        methodsName: 'setCurrentRow',
        explain: '用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。',
        parameter: 'row'
    },
    {
        methodsName: 'pagingScrollTopLeft',
        explain: '让表格滚动条回到顶部和左侧。',
        parameter: 'top,left -> 距离顶部, 左侧距离。 不传值默认为0'
    },
    {
        methodsName: 'doLayout',
        explain: '重新计算表格，如果传 true 则进行完整计算（对于某些特殊场景可能会用到，比如隐藏的表格、重新计算列宽...等）',
        parameter: '—'
    },
    {
        methodsName: 'clearSort',
        explain: '用于清空排序条件，数据会恢复成未排序的状态',
        parameter: '—'
    },
    {
        methodsName: 'clearFilter',
        explain: '手动清空筛选条件（如果不传 column 则清空所有筛选条件），数据会恢复成未筛选的状态',
        parameter: 'column'
    },
    {
        methodsName: 'sort',
        explain: '手动对表格进行排序（如果 order 为空则自动切换排序）',
        parameter: "field: string, order: 'desc' | 'asc'"
    },
    {
        methodsName: 'reloadData',
        explain: '加载数据并清除所有状态（对于表格数据需要重载、局部递增的场景中可能会用到）',
        parameter: 'data'
    },
    {
        methodsName: 'loadData',
        explain: '加载数据（对于表格数据需要重载、局部递增场景下可能会用到）',
        parameter: 'data'
    },
    {
        methodsName: 'tableExample',
        explain: '表格实例方式，调用就会返回table实例',
        parameter: '—'
    },
    {
        methodsName: 'getTableColumn',
        explain: '获取表格的列',
        parameter: '—'
    },
    {
        methodsName: 'scrollToRow',
        explain: '如果有滚动条，则滚动到对应的行（对于某些特定的场景可能会用到，比如定位到某一行）',
        parameter: 'row'
    },
    {
        methodsName: 'reloadColumn',
        explain: '加载列配置并恢复到初始状态（对于表格列需要重载、局部递增场景下可能会用到）',
        parameter: 'columns'
    },
    {
        methodsName: 'loadColumn',
        explain: '加载列配置（对于表格列需要重载、局部递增场景下可能会用到）',
        parameter: 'columns'
    },
    {
        methodsName: 'setActiveRow',
        explain: '用于 edit-config，激活行编辑，如果是 mode=cell 则默认激活第一个单元格',
        parameter: 'row'
    },
    {
        methodsName: 'setActiveCell(row, field)',
        explain:  '用于 edit-config，激活单元格编辑',
        parameter: 'row: Row, field: string'
    },
    {
        methodsName: 'insertRow',
        explain: '往表格插入临时数据（不支持树结构），从指定位置插入一行或多行；第二个参数：row 指定位置、null从第一行插入、-1 从最后插入',
        parameter: 'records, row'
    },
    {
        methodsName: 'getInsertRecords',
        explain: '用于 edit-config，获取插入的临时数据',
        parameter: '—'
    },
    {
        methodsName: 'getCheckboxRecords',
        explain: '用于 type=checkbox，获取已选中的行数据',
        parameter: '—'
    },
    {
        methodsName: 'getRecordset',
        explain: '获取表格数据（获取插入）',
        parameter: '—'
    },
    {
        methodsName: 'getTableColumn',
        explain: '获取当前表格的列（收集到的全量列、全量表头列、处理条件之后的全量表头列、当前渲染中的表头列）',
        parameter: '返回参数{collectColumn, fullColumn, visibleColumn, tableColumn}'
    },
    {
        methodsName: 'getColumnIndex',
        explain: '根据 column 获取相对于 columns 中的索引',
        parameter: 'Number'
    },
    {
        methodsName: 'updateStatus',
        explain: '更新单元格状态（当使用自定义渲染时可能会用到）',
        parameter: 'scope: { row, column }'
    },
    {
        methodsName: 'remove',
        explain: '删除指定行数据（不支持深层结构），指定 row 或 [row, ...] 删除多条数据，如果为空则删除所有数据',
        parameter: '这样调用，this.$refs.表格组件绑定的ref属性名.remove(row || [row, ...])'
    },
    {
        methodsName: 'removeCheckboxRow',
        explain: '删除复选框选中的行数据（不支持树结构）',
        parameter: '—'
    },
    {
        methodsName: 'getUpdateRecords',
        explain: '只对 keep-source 开启有效，获取已修改的数据',
        parameter: '—'
    },
    {
        methodsName: 'isUpdateByRow',
        explain: '只对 keep-source 开启有效，判断行数据是否发生改变',
        parameter: 'row'
    },
    {
        methodsName: 'isCheckedByCheckboxRow',
        explain: '用于 type=checkbox，判断复选行数据是否勾选',
        parameter: 'row'
    },
    {
        methodsName: 'reloadRow(rows, record, field)',
        explain: '局部加载行数据并恢复到初始状态（对于行数据需要局部更改的场景中可能会用到）',
        parameter: 'rows, record, field'
    },
    {
        methodsName: 'isActiveByRow',
        explain: '用于 edit-config，判断行是否为激活编辑状态',
        parameter: 'row'
    },
    {
        methodsName: 'clearActived',
        explain: '手动清除单元格激活状态',
        parameter: '—'
    },
    {
        methodsName: 'revertData(rows)',
        explain: '只对 keep-source 开启有效，还原指定行 row 或者整个表格的数据',
        parameter: 'rows'
    },
    {
        methodsName: 'updateFooter',
        explain: '手动更新表尾（对于某些需要频繁更新的场景下可能会用到）',
        parameter: '—'
    },
    {
        methodsName: 'setFilter',
        explain: '用于 filters，修改筛选列表（在筛选条件更新之后可以调用 updateData 函数处理表格数据）',
        parameter: 'column: Column, options: []'
    },
    {
        methodsName: 'updateData',
        explain: '手动处理数据（对于手动更改了排序、筛选...等条件后需要重新处理数据时可能会用到）',
        parameter: '—'
    },
    {
        methodsName: 'toggleRowExpand(row)',
        explain: '用于 type=expand，切换展开行的状态',
        parameter: '—'
    },
    {
        methodsName: 'setRowExpand(rows, checked)',
        explain: '用于 expand-config，设置展开行，二个参数设置这一行展开与否',
        parameter: '—'
    },
    {
        methodsName: 'setAllRowExpand(checked)',
        explain: '用于 expand-config，设置所有行的展开与否（如果是关闭所有行，可以使用 clearRowExpand 快速清除）',
        parameter: '—'
    },
    {
        methodsName: 'clearRowExpand()',
        explain: '用于 type=expand，手动清空展开行状态，数据会恢复成未展开的状态',
        parameter: '—'
    }
]
