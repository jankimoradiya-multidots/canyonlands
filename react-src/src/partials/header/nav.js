import React , {Component} from 'react';
import { Link } from 'react-router-dom';


class Nav extends Component {
    constructor(props) {
         super(props);
        this.state = {
            headerMenu: [],
        };
    }

    componentDidMount() {
            fetch(`./wp-json/wp/v2/menu`)
                .then(response => response.json())
                .then(data => {
                   if ( 0 < data.length ) {
                    this.setState({
                        headerMenu: data
                    });
                    console.log(data);
                   } 
                });

    }
   
    render() {
        const {headerMenu} = this.state;
        console.log("headerMenu");
        console.log(headerMenu);
       const getLocation = (href) =>{
            var l = document.createElement("a");
            l.href = href;
            return l;
        };
        return (
            <div className='navigation-wrapper'>
                <nav className={`header-nav`}>
                { 0 <  Object.keys( headerMenu ).length && (
					<ul className="header-nav__wrap">
						{ headerMenu.map( ( menu ) => { 
                            const l= getLocation(menu.url);
                            const path = l.pathname ;
                            return (
								<li
                                key={ menu.ID }
                                className={ `header-nav__menu-item ${
                                    '0' !== menu.menu_item_parent
                                        ? 'menu-has-children'
                                        : ''
                                } `}
								>
                                    <Link
										className="header-nav__menu-link"
										to={ path }
									>
										{ menu.title }
									</Link>
                                    <span
										className="header-nav__toggle-menu-btn"
										// onClick={ ( event ) =>
										// 	handleSubMenuOpen( event, menu.ID )
										// }
									></span>
                                </li>
                            )
                        }
                        )}
                    </ul>
                )}
                </nav>
            </div>
        );
    }
    
}

export default Nav;