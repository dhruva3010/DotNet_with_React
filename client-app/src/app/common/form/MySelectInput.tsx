import { useField } from "formik";
import { Label, Select } from "semantic-ui-react";

import { Form } from "semantic-ui-react";

interface Props {
    options: {
        text: string;
        value: string;
    }[];
    placeholder: string;
    name: string;
    label?: string;
}

function MySelectInput(props: Props) {
    const [field, meta, helpers] = useField(props.name);
    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{props.label}</label>
            <Select
                clearable
                options={props.options}
                placeholder={props.placeholder}
                name={props.name}
                value={field.value}
                onChange={(_, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>
    )
}

export default MySelectInput;