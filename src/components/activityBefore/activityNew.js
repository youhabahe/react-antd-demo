import React from 'react'
import {Table, Icon} from 'antd'

export default class activityAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tDate: [],
            selectedRowKeys: []
        }
    }

    componentDidMount() {
        const data = []

        // for (let i = 0; i < 46; i++) {
        //     data.push({
        //         key: i,
        //         name: `Mr劳卜${i}`,
        //         age: 18,
        //         address: `西湖区湖底公园${i}号`,
        //         remark: 'http://www.cnblogs.com/luozhihao/',
        //         operate: '暂无'
        //     })
        // }

        this.setState({
            tDate: data
        })
    }

    // checkbox状态
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys)
        this.setState({ selectedRowKeys })
    }

    render() {
        const columns = [{
            title: '活动编号',
            width: '20%',
            dataIndex: 'name'
        }, {
            title: '活动名称',
            width: '20%',
            dataIndex: 'age',
        }, {
            title: '活动时间',
            width: '20%',
            dataIndex: 'address'
        }, {
            title: '活动地点',
            width: '20%',
            dataIndex: 'remark'
        },
            {
                title: '审核状态',
                width: '20%',
                dataIndex: 'remark'
        },
            {
                title: '活动状态',
                width: '20%',
                dataIndex: 'remark'
        },
            {
            title: '操作',
            width: '20%',
            dataIndex: 'operate'
        }]

        const {
            selectedRowKeys } = this.state

        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange
        }

        const pagination = {
            total: this.state.tDate.length,
            showSizeChanger: true,
            onShowSizeChange(current, pageSize) {
                console.log('Current: ', current, '; PageSize: ', pageSize)
            },
            onChange(current) {
                console.log('Current: ', current)
            }
        }

        return (
            <div>
                <Table rowSelection={rowSelection} columns={columns} dataSource={this.state.tDate} bordered pagination={pagination} />
            </div>
        )
    }
}
