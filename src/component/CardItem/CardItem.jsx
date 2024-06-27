import React from 'react'
import './CardItem.css'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';


const CardItem = (props) => {
    const { cardDetails } = props
    const { name, businesscategory, yourphoto } = cardDetails

    return (
        <li>
            <div className='listed-member-card'>
                <motion.div

                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.3 }}


                    className="cus-profile-container">
                    <img src='https://img.freepik.com/premium-photo/user-icon-glossy-blue_335552-1305.jpg?w=740'
                        alt="profile"
                        className="card-profile"
                    />
                    <div className='name-positon-container'>
                        <p className="card-name">{name}</p>
                        <p className="card-possition">{businesscategory}</p>
                    </div>
                    <button className='view-more-btn'>View More</button>
                </motion.div>
                
            </div>
            
        </li>
    )

}

export default CardItem