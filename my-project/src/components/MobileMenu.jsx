import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
function MobileMenu({ visible }) {
    if (!visible) {
        return null
    }

    return (
        <div className="bg-black w-56 absolute top-14 right-4 py-5 flex-col border border-bleuClair flex">
            <div className="flex flex-col gap-4">
                <Link
                    to="/"
                    className="px-4 text-center cursor-pointer hover:opacity-80"
                >
                    Accueil
                </Link>
                <Link
                    to="/apropos"
                    className="px-4 text-center cursor-pointer hover:opacity-80"
                >
                    A propos
                </Link>
                <Link
                    to="/realisation"
                    className="px-4 text-center cursor-pointer hover:opacity-80"
                >
                   Mes realisations
                </Link>
                <Link
                    to="/contact"
                    className="px-4 text-center cursor-pointer hover:opacity-80"
                >
                    Contacts
                </Link>
            </div>
        </div>
    )
}

MobileMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
};

export default MobileMenu;
