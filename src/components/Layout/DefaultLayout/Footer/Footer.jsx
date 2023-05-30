import React, { useState } from 'react';

import FormDonate from '../../../../FormDonate/FormDonate';

import './Footer.css';

import mail from '../../../../svg/2xmail.svg';
import locate from '../../../../svg/2xlocate.svg';
import logo from '../../../../svg/2xlogo.svg';
import facebook from '../../../../svg/facebook.svg';
import instagram from '../../../../svg/instagram.svg';

const Footer = () => {
    return (
        <div>
            <FormDonate />
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    );
};
export default Footer;
