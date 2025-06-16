import { __ } from '@wordpress/i18n';
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({attributes, setAttributes}){
    const blockProps = useBlockProps.save();
    const { phone, email } = attributes;

    return (
        <div {...blockProps}>
            <div className='row'>
                <h2>Contact Us</h2>
                <div className="row address">
                    <a title="mbakapower phone number" href={`tel:${phone}`}>
                        Phone: {phone}
                    </a>
                    <a title="mbakapower email address" href={`mailto:${email}`}>
                        Email: {email}
                    </a>
                </div>
            </div>
        </div>
    );
}