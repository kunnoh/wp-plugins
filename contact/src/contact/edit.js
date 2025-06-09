import { __ } from '@wordpress/i18n';
import { 
	InspectorControls,
	useBlockProps,
	RichText 
} from '@wordpress/block-editor';
import { 
	PanelBody, 
	TextControl,
	TextareaControl,
	ToggleControl,
	ColorPicker
} from '@wordpress/components';
import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const {
		companyName,
		address,
		phone,
		email,
		businessHours,
		socialLinks,
		showMap,
		mapEmbedCode,
		backgroundColor,
		textColor
	} = attributes;
	
	const blockProps = useBlockProps({
		className: 'contact-block',
		style: {
			backgroundColor,
			color: textColor
		}
	});

	const updateAddress = (field, value) => {
		setAttributes({
			address: {
				...address,
				[field]: value
			}
		});
	};

	const updateBusinessHours = (field, value) => {
		setAttributes({
			businessHours: {
				...businessHours,
				[field]: value
			}
		});
	};

	const updateSocialLinks = (platform, value) => {
		setAttributes({
			socialLinks: {
				...socialLinks,
				[platform]: value
			}
		});
	};

	return (
		<div { ...blockProps() }>
			<InspectorControls>
				<PanelBody title={__('Company Information', 'contact-us')}>
					<TextControl
						label={__('Company Name', 'contact-us')}
						value={companyName}
						onChange={(value) => setAttributes({ companyName: value })}
					/>
					<TextControl
						label={__('Street Address', 'contact-us')}
						value={address.street}
						onChange={(value) => updateAddress('street', value)}
					/>
					<TextControl
						label={__('City', 'contact-us')}
						value={address.city}
						onChange={(value) => updateAddress('city', value)}
					/>
					<TextControl
						label={__('State/Province', 'contact-us')}
						value={address.state}
						onChange={(value) => updateAddress('state', value)}
					/>
					<TextControl
						label={__('ZIP/Postal Code', 'contact-us')}
						value={address.zipCode}
						onChange={(value) => updateAddress('zipCode', value)}
					/>
					<TextControl
						label={__('Country', 'contact-us')}
						value={address.country}
						onChange={(value) => updateAddress('country', value)}
					/>
				</PanelBody>

				<PanelBody title={__('Contact Details', 'contact-us')}>
					<TextControl
						label={__('Phone Number', 'contact-us')}
						value={phone}
						onChange={(value) => setAttributes({ phone: value })}
					/>
					<TextControl
						label={__('Email Address', 'contact-us')}
						value={email}
						onChange={(value) => setAttributes({ email: value })}
					/>
				</PanelBody>

				<PanelBody title={__('Business Hours', 'contact-us')}>
					<TextControl
						label={__('Weekdays', 'contact-us')}
						value={businessHours.weekdays}
						onChange={(value) => updateBusinessHours('weekdays', value)}
					/>
					<TextControl
						label={__('Saturday', 'contact-us')}
						value={businessHours.saturday}
						onChange={(value) => updateBusinessHours('saturday', value)}
					/>
					<TextControl
						label={__('Sunday', 'contact-us')}
						value={businessHours.sunday}
						onChange={(value) => updateBusinessHours('sunday', value)}
					/>
				</PanelBody>

				<PanelBody title={__('Social Media', 'contact-us')}>
					<TextControl
						label={__('Facebook URL', 'contact-us')}
						value={socialLinks.facebook}
						onChange={(value) => updateSocialLinks('facebook', value)}
					/>
					<TextControl
						label={__('Twitter URL', 'contact-us')}
						value={socialLinks.twitter}
						onChange={(value) => updateSocialLinks('twitter', value)}
					/>
					<TextControl
						label={__('LinkedIn URL', 'contact-us')}
						value={socialLinks.linkedin}
						onChange={(value) => updateSocialLinks('linkedin', value)}
					/>
					<TextControl
						label={__('Instagram URL', 'contact-us')}
						value={socialLinks.instagram}
						onChange={(value) => updateSocialLinks('instagram', value)}
					/>
				</PanelBody>

				<PanelBody title={__('Map Settings', 'contact-us')}>
					<ToggleControl
						label={__('Show Map', 'contact-us')}
						checked={showMap}
						onChange={(value) => setAttributes({ showMap: value })}
					/>
					{showMap && (
						<TextareaControl
							label={__('Google Maps Embed Code', 'contact-us')}
							value={mapEmbedCode}
							onChange={(value) => setAttributes({ mapEmbedCode: value })}
							help={__('Paste the embed code from Google Maps', 'contact-us')}
						/>
					)}
				</PanelBody>

				<PanelBody title={__('Colors', 'contact-us')}>
					<div className="color-control">
						<label>{__('Background Color', 'contact-us')}</label>
						<ColorPicker
							color={backgroundColor}
							onChange={(value) => setAttributes({ backgroundColor: value })}
						/>
					</div>
					<div className="color-control">
						<label>{__('Text Color', 'contact-us')}</label>
						<ColorPicker
							color={textColor}
							onChange={(value) => setAttributes({ textColor: value })}
						/>
					</div>
				</PanelBody>
			</InspectorControls>
			<div className="contact-us-container">
				<header className="contact-header">
					<h2 className="contact-title">Contact Us</h2>
					<p className="contact-subtitle">We'd love to hear from you. Get in touch with our team today.</p>
				</header>

				<div className="contact-content">
					<div className="contact-info">
						<h3>Get In Touch</h3>
						
						{/* Address */}
						<div className="contact-item">
							<div className="contact-icon">
								<MapPin size={24} />
							</div>
							<div className="contact-details">
								<h4>Our Office</h4>
								<address>
									{address.street}<br />
									{address.city}, {address.state} {address.zipCode}<br />
									{address.country}
								</address>
							</div>
						</div>

						{/* Phone */}
						<div className="contact-item">
							<div className="contact-icon">
								<Phone size={24} />
							</div>
							<div className="contact-details">
								<h4>Phone</h4>
								<a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
							</div>
						</div>

						{/* Email */}
						<div className="contact-item">
							<div className="contact-icon">
								<Mail size={24} />
							</div>
							<div className="contact-details">
								<h4>Email</h4>
								<a href={`mailto:${email}`}>{email}</a>
							</div>
						</div>

						{/* Business Hours */}
						<div className="contact-item">
							<div className="contact-icon">
								<Clock size={24} />
							</div>
							<div className="contact-details">
								<h4>Business Hours</h4>
								<div className="business-hours">
									<div>{businessHours.weekdays}</div>
									<div>{businessHours.saturday}</div>
									<div>{businessHours.sunday}</div>
								</div>
							</div>
						</div>

						{/* Social Media */}
						<div className="contact-social">
							<h4>Follow Us</h4>
							<div className="social-links">
								{socialLinks.facebook && (
									<a href={socialLinks.facebook} aria-label="Facebook">
										<Facebook size={24} />
									</a>
								)}
								{socialLinks.twitter && (
									<a href={socialLinks.twitter} aria-label="Twitter">
										<Twitter size={24} />
									</a>
								)}
								{socialLinks.linkedin && (
									<a href={socialLinks.linkedin} aria-label="LinkedIn">
										<Linkedin size={24} />
									</a>
								)}
								{socialLinks.instagram && (
									<a href={socialLinks.instagram} aria-label="Instagram">
										<Instagram size={24} />
									</a>
								)}
							</div>
						</div>
					</div>

					<div className="contact-form-section">
						<h3>Send Us a Message</h3>
						<p>Fill out the form below and we'll get back to you as soon as possible.</p>
						
						<div className="contact-form-preview">
							<div className="form-row">
								<div className="form-group">
									<label>First Name *</label>
									<input type="text" placeholder="John" disabled />
								</div>
								<div className="form-group">
									<label>Last Name *</label>
									<input type="text" placeholder="Doe" disabled />
								</div>
							</div>
							
							<div className="form-row">
								<div className="form-group">
									<label>Email Address *</label>
									<input type="email" placeholder="john.doe@example.com" disabled />
								</div>
								<div className="form-group">
									<label>Phone Number</label>
									<input type="tel" placeholder="+1 (234) 567-890" disabled />
								</div>
							</div>
							
							<div className="form-group">
								<label>Subject *</label>
								<input type="text" placeholder="How can we help you?" disabled />
							</div>
							
							<div className="form-group">
								<label>Message *</label>
								<textarea placeholder="Tell us about your project or inquiry..." disabled rows="5"></textarea>
							</div>
							
							<button type="button" className="submit-button" disabled>
								Send Message
							</button>
							
							<p className="form-note">* This is a preview. The form will be functional on the frontend.</p>
						</div>
					</div>
				</div>

				{showMap && mapEmbedCode && (
					<div className="contact-map">
						<h3>Find Us</h3>
						<div 
							className="map-embed"
							dangerouslySetInnerHTML={{ __html: mapEmbedCode }}
						/>
					</div>
				)}
			</div>
		</div>
	);
}
