import { __ } from '@wordpress/i18n';
import { useBlockProps } from "@wordpress/block-editor";

export default function Save({attributes, setAttributes}){
    return (
        <div {...useBlockProps.save()}>
            <div className='row'>
                <h2>Listings</h2>
                <div className="row address">
                    
                </div>
            </div>
        </div>
    );
}