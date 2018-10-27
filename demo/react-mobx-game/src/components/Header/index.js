import React, { Component } from 'react';
import styles from '@/index.less';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={styles.header}>
                <div className={styles.headerContainer}>

                </div>
            </div>
        )
    }
}