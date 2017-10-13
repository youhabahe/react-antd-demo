import React from 'react'
import { Form, Input, Select, Checkbox, DatePicker, Col, Radio, Button, Modal, message } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group

class myForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }

    // 选择select
    handleSelectChange = (value) => {
        console.log(`selected ${value}`)
    }

    // 提交表单
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('收到表单值：', this.props.form.getFieldsValue())

        this.props.form.resetFields()
    }


    // 显示弹框
    showModal = () => {
        this.setState({ visible: true })
    }


    // 隐藏弹框
    hideModal = () => {
        this.setState({ visible: false })
    }

    render() {
        const { getFieldProps } = this.props.form

        const formItemLayout = {
            labelCol: { span: 3 },
            wrapperCol: { span: 6 }
        }

        const success = function () {
            message.success('操作成功!');
        }

        return (
            <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                    id="activitySource"
                    label="活动来源"
                    {...formItemLayout}>
                    <Select id="activitySource" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}
                            {...getFieldProps('people')}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                        <Option value="disabled" disabled>disabled</Option>
                        <Option value="yiminghe">yiminghe</Option>
                    </Select>
                </FormItem>
                <FormItem
                    id="activityName"
                    label="活动名称"
                    {...formItemLayout}
                    required>
                    <Input id="activityName" placeholder="Please enter..."
                           {...getFieldProps('userName')} />
                </FormItem>
                <FormItem
                    id="activityAddress"
                    label="活动地址"
                    {...formItemLayout}
                    required>
                    <Input id="control-input" placeholder="Please enter..."
                           {...getFieldProps('userName')} />
                </FormItem>
                <FormItem
                    label="开始时间"
                    labelCol={{ span: 3 }}
                    required>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('startDate')} />
                        </FormItem>
                    </Col>
                    <Col span="1">
                        <p className="ant-form-split">-</p>
                    </Col>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('endDate')} />
                        </FormItem>
                    </Col>
                </FormItem>
                <FormItem
                    label="结束时间"
                    labelCol={{ span: 3 }}
                    required>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('startDate')} />
                        </FormItem>
                    </Col>
                    <Col span="1">
                        <p className="ant-form-split">-</p>
                    </Col>
                    <Col span="2">
                        <FormItem>
                            <DatePicker {...getFieldProps('endDate')} />
                        </FormItem>
                    </Col>
                </FormItem>
                <FormItem
                    id="activityType"
                    label="活动类型"
                    {...formItemLayout}>
                    <Select id="select" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}
                            {...getFieldProps('people')}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                        <Option value="disabled" disabled>disabled</Option>
                        <Option value="yiminghe">yiminghe</Option>
                    </Select>
                </FormItem>
                <FormItem
                    id="activityArrange"
                    label="活动规模"
                    {...formItemLayout}>
                    <Select id="activityArrange" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}
                            {...getFieldProps('people')}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                        <Option value="disabled" disabled>disabled</Option>
                        <Option value="yiminghe">yiminghe</Option>
                    </Select>
                </FormItem>
                <FormItem
                id="participantsNumber"
                label="参与人数"
                {...formItemLayout}>
                <Select id="participantsNumber" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}
                        {...getFieldProps('people')}>
                    <Option value="jack">jack</Option>
                    <Option value="lucy">lucy</Option>
                    <Option value="disabled" disabled>disabled</Option>
                    <Option value="yiminghe">yiminghe</Option>
                </Select>
                </FormItem>
                <FormItem
                    id="responseDepartment"
                    label="负责单位"
                    {...formItemLayout}>
                    <Select id="responseDepartment" size="large" defaultValue="lucy" style={{ width: 200 }} onChange={this.handleSelectChange}
                            {...getFieldProps('people')}>
                        <Option value="jack">jack</Option>
                        <Option value="lucy">lucy</Option>
                        <Option value="disabled" disabled>disabled</Option>
                        <Option value="yiminghe">yiminghe</Option>
                    </Select>
                </FormItem>
                <FormItem
                    id="linkman"
                    label="联系人"
                    {...formItemLayout}
                    required>
                    <Input id="linkman" placeholder="Please enter..."
                           {...getFieldProps('userName')} />
                </FormItem>
                <FormItem
                    id="linkphone"
                    label="联系电话"
                    {...formItemLayout}
                    required>
                    <Input id="linkphone" placeholder="Please enter..."
                           {...getFieldProps('userName')} />
                </FormItem>
                <FormItem
                    id="description"
                    label="活动说明"
                    {...formItemLayout}
                    required>
                    <Input id="description" placeholder="Please enter..."
                           {...getFieldProps('userName')} />
                </FormItem>
                <FormItem wrapperCol={{ span: 6, offset: 3 }} style={{ marginTop: 24 }}>
                    <Button type="primary" htmlType="submit" onClick={success}>确定</Button>
                </FormItem>
            </Form>
        )
    }
}

myForm = Form.create()(myForm)

export default myForm