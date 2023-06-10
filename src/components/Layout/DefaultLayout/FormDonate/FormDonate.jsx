import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './FormDonate.module.scss';
import './responsive.module.scss';
import classNames from 'classnames/bind';
import background from '../../../../image/closeup-shot-small-green-leaves-bush.jpg';

const cx = classNames.bind(styles);

const FormDonate = () => {
    const [inputs, setInputs] = useState({});

    const [Name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [project, setProject] = useState('');
    const [dollar, setDollar] = useState('');
    const [file, setFile] = useState('');

    const handleChange = (event) => {
        const Name = event.target.Name;
        const value = event.target.value;

        setInputs((values) => ({ ...values, [Name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(project);
        setDollar('');
        setEmail('');
        setFile('');
        setName('');
        setProject('');
        // console.log(inputs);
    };
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title', 'section', 'title-session')}>Let’s join with us now</h2>
            <div className={cx('row', 'section', 'content')} style={{ backgroundImage: `url(${background})` }}>
                <form className={cx('offset-lg-2', 'col-lg-8', 'col-sm-12', 'form-donate')} onSubmit={handleSubmit}>
                    <div className={cx('item')}>
                        <label>Name</label>
                        <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className={cx('item')}>
                        <label>Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={cx('item', 'item-select')}>
                        <label>Choose a project</label>
                        <select
                            id="project"
                            name="project"
                            value={project}
                            onChange={(e) => setProject(e.target.value)}
                        >
                            <option value="project">Dự án trồng 1000 cây xanh ở Bình Phước</option>
                            <option value="project">Dự án trồng 1000 cây xanh ở Bình Phước</option>
                            <option value="project">Dự án trồng 1000 cây xanh ở Bình Phước</option>
                        </select>
                    </div>
                    <div className={cx('item')}>
                        <label>How much money do you want to donate? (in dollar)</label>
                        <input type="number" value={dollar} onChange={(e) => setDollar(e.target.value)} />
                    </div>
                    <div className={cx('item')}>
                        <label>Your image for proving donation</label>
                        <input
                            size="60"
                            type="file"
                            value={file}
                            onChange={(e) => setFile(e.target.value)}
                            accept="image/png, image/jpeg"
                        />
                    </div>
                    <button className={cx('btn', 'btn-donate')} onClick={handleSubmit}>
                        Donate
                    </button>
                </form>
            </div>
        </div>
    );
};
export default FormDonate;
