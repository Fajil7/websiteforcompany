import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './home.css'
import TestimonialSlider from '../TestimonialSlider/Testimonial';

function Home() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<section>
			<Slider {...settings}>
				<div>
					<img src="https://businesssphere.info/uploads/banner/2054857676704355.jpg" alt="img1" className='crousal-img' />
				</div>
				<div>
					<img src="https://businesssphere.info/uploads/banner/6095754063000588.png" alt="img1" className='crousal-img' />
				</div>
				<div>
					<img src="https://businesssphere.info/uploads/banner/1474091916307897.jpeg" alt="img1" className='crousal-img' />
				</div>
			</Slider>
			<h1 className="buss-heading">Business Directory</h1>
			<div className="directory-card">
				<div className="cus-profile-container">
					<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740"
						alt="profile"
						className="profile"
					/>
					<p className="name">Name</p>
					<p className="possition">Position</p>
				</div>
				<div className="cus-profile-container">
					<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740"
						alt="profile"
						className="profile"
					/>
					<p className="name">Name</p>
					<p className="possition">Position</p>
				</div>
				<div className="cus-profile-container">
					<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740"
						alt="profile"
						className="profile"
					/>
					<p className="name">Name</p>
					<p className="possition">Position</p>
				</div>
				<div className="cus-profile-container">
					<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740"
						alt="profile"
						className="profile"
					/>
					<p className="name">Name</p>
					<p className="possition">Position</p>
				</div>
				<div className="cus-profile-container">
					<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740"
						alt="profile"
						className="profile"
					/>
					<p className="name">Name</p>
					<p className="possition">Position</p>
				</div>
				<div className="cus-profile-container">
					<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740"
						alt="profile"
						className="profile"
					/>
					<p className="name">Name</p>
					<p className="possition">Position</p>
				</div>
				<div className="cus-profile-container">
					<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740"
						alt="profile"
						className="profile"
					/>
					<p className="name">Name</p>
					<p className="possition">Position</p>
				</div>
				<div className="cus-profile-container">
					<img src="https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740"
						alt="profile"
						className="profile"
					/>
					<p className="name">Name</p>
					<p className="possition">Position</p>
				</div>
			</div>
			<h1 className="buss-heading">About Business Sphere</h1>
			<div className="directory-card">
				<div className="about-detail-card">
					<div className="detail-card">
						<h1 className="abou-heading">About Us</h1>
						<p className="description">
							Gratitude for the welcome to Business Sphere! a thriving networking
							community for seasoned business professionals in the vibrant city of Kolkata.
						</p>
					</div>
					<div className="detail-card">
						<h1 className="abou-heading">Our Mission</h1>
						<p className="description">
							At Business Sphere, our mission is clear and compelling. We aim to
							empower and connect the experienced and dynamic business minds of Kolkata.
						</p>
					</div>
					<div className="detail-card">
						<h1 className="abou-heading">Why Choose Us</h1>
						<p className="list-item">1.<span> </span>Networking</p>
						<p className="list-item">2.<span> </span>Guidance from Leaders</p>
						<p className="list-item">3.<span> </span>Recognition and Awards</p>
						<p className="list-item">4.<span> </span>Recognition and Awards</p>
						<p className="list-item">5.<span> </span>Social Responsibility</p>
						<p className="list-item">6.<span> </span>Strengthen Bonds</p>
					</div>
				</div>
			</div>
			<h1 className='buss-heading'>Our Pocess</h1>
			<div className='process-align-container'>
				<div className='one-process'>
					<div className="process-detail-card">
						<img
							src="https://businesssphere.info/images/img-1.png"
							className="profile"
						/>
						<p className="apply-heading">Apply for Listing on Website</p>
					</div>
					<div className="process-detail-card">
						<img
							src="https://businesssphere.info/images/img-2.png"
							className="profile"
						/>
						<p className="possition">Review</p>
					</div>
				</div>
				<div className='one-process'>
					<div className="process-detail-card">
						<img
							src="https://businesssphere.info/images/img-3.png"
							className="profile"
						/>
						<p className="possition">Approval</p>
					</div>
					<div className="process-detail-card collaborate">
						<img
							src="https://businesssphere.info/images/img-4.png"
							className="profile"
						/>
						<p className="possition">Collaborate</p>
					</div>
				</div>
			</div>
			<div>
				<h1 className='testimonial-heading'>Testimonials</h1>
				<TestimonialSlider />
			</div>
			<div className="our-supporting-brd-contianer">
				<h1 className="buss-heading">Supporting Brands</h1>
				<div>
					<marquee direction="left" scrollamount="20" class="marquee">
						<img src="https://businesssphere.info/images/24.png" class="com-logo" />
						<img src="https://businesssphere.info/images/logo.png" class="com-logo" />
						<img src="https://businesssphere.info/images/20.png" class="com-logo" />
						<img src="https://businesssphere.info/images/19.png" class="com-logo" />
						<img src="https://businesssphere.info/images/25.jpeg" class="com-logo" />
						<img src="https://businesssphere.info/images/26.jpeg" class="com-logo" />
					</marquee>


				</div>
			</div>
			<div className='data-main-container'>
				<div className="business-contianer">
					<h1 className="heading">Nature of Business</h1>
					<div className="directory-data-container">
						<div className="directory-data">
							<h1 className="text-11">11+</h1>
							<p className="text-manufacture">Manufacture</p>
						</div>
						<div className="directory-data">
							<p className="text-11">10+</p>
							<p className="text-manufacture">services</p>
						</div>
						<div className="directory-data">
							<p className="text-11">13+</p>
							<p className="text-manufacture">Retail</p>
						</div>
						<div className="directory-data">
							<p className="text-11">9+</p>
							<p className="text-manufacture">Professional</p>
						</div>
						<div className="directory-data">
							<p className="text-11">2+</p>
							<p className="text-manufacture">Others</p>
						</div>
					</div>
				</div>
			</div>
			<div className='data-main-container'>
				<div className="business-contianer">
					<h1 className="heading">Blood Group</h1>
					<div className="directory-data-container">
						<div className="directory-data">
							<p className="text-11">11+</p>
							<p className="text-manufacture">A+</p>
						</div>
						<div className="directory-data">
							<p className="text-11">10+</p>
							<p className="text-manufacture">A-</p>
						</div>
						<div className="directory-data">
							<p className="text-11">17+</p>
							<p className="text-manufacture">B+</p>
						</div>
						<div className="directory-data">
							<p className="text-11">0+</p>
							<p className="text-manufacture">B-</p>
						</div>
						<div className="directory-data">
							<p className="text-11">6+</p>
							<p className="text-manufacture">AB-</p>
						</div>
						<div className="directory-data">
							<p className="text-11">0+</p>
							<p className="text-manufacture">AB-</p>
						</div>
						<div className="directory-data">
							<p className="text-11">0+</p>
							<p className="text-manufacture">O+</p>
						</div>
						<div className="directory-data">
							<p className="text-11">11+</p>
							<p className="text-manufacture">O-</p>
						</div>
					</div>
				</div>
			</div>

			<div className='data-main-container'>
				<div className="business-contianer">
					<h1 className="heading">Localoty</h1>
					<div className="directory-data-container">
						<div className="directory-data">
							<p className="text-11">11+</p>
							<p className="text-manufacture">South Kolkata Metro Area</p>
						</div>
						<div className="directory-data">
							<p className="text-11">2+</p>
							<p className="text-manufacture">North Kolkata Metro Area</p>
						</div>
						<div className="directory-data">
							<p className="text-11">10+</p>
							<p className="text-manufacture">North Kolkata E M Byepass</p>
						</div>
						<div className="directory-data">
							<p className="text-11">1+</p>
							<p className="text-manufacture">Extended north kolkata</p>
						</div>
						<div className="directory-data">
							<p className="text-11">1+</p>
							<p className="text-manufacture">Industrial Area south Kolkata</p>
						</div>
						<div className="directory-data">
							<p className="text-11">0+</p>
							<p className="text-manufacture">Non Metro Route Science City</p>
						</div>
						<div className="directory-data">
							<p className="text-11">9+</p>
							<p className="text-manufacture">Central kolkata</p>
						</div>
						<div className="directory-data">
							<p className="text-11">2+</p>
							<p className="text-manufacture">Others</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Home