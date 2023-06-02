import React, { useState } from 'react';

import mail from '../../../../svg/2xmail.svg';
import locate from '../../../../svg/2xlocate.svg';
import logo from '../../../../svg/2xlogo.svg';

import FormDonate from '../../../../FormDonate/FormDonate';

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
