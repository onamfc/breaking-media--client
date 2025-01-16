'use client';

import React, {useState} from "react";
import styled, {keyframes} from "styled-components";
import axios from "axios";
import Logo from "@/app/components/logo";

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
`;

const HeaderContainer = styled.header`
    background-color: #fff;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ccc;
    max-width: 1200px;
    margin: 0 auto;
`;


const Nav = styled.nav`
    margin-left: 2rem;
    width: 100%;
    text-transform: uppercase;

    a {
        color: #fff;
        text-decoration: none;
        margin: 0 1rem;
        font-size: 0.8em;

        &:hover {
            text-decoration: underline;
        }
    }
`;
const PopupOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const PopupContent = styled.div`
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
    animation: ${fadeIn} 0.3s ease-in-out;
    position: relative;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    font-size: 1.5rem;
    color: #000;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;

    &:hover {
        color: #000;
    }
`;

const Header: React.FC = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [formData, setFormData] = useState({email: '', firstName: ''});
    const [error, setError] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await axios.post('/form/subscribe', formData);
            alert('Thank you for subscribing!');
            setIsPopupOpen(false);
        } catch (err) {
            setError('Failed to subscribe. Please try again later.');
        }
    };

    return (
        <>
            <HeaderContainer>
               <Logo version={'dark'} width={260}/>
                <Nav>

                </Nav>
                <button
                    onClick={() => {
                        setIsPopupOpen(true);
                    }}
                    className='bg-[#838383] hover:bg-[#838383] text-white font-bold py-1 px-4'>Donate
                </button>
            </HeaderContainer>
            {isPopupOpen && (
                <PopupOverlay>
                    <PopupContent>
                        <CloseButton onClick={() => setIsPopupOpen(false)}>&times;</CloseButton>
                        <div className='flex justify-center'>
                            <Logo version={'dark'} width={260}/>
                        </div>


                        <h3 className="text-lg font-normal mb-4 mt-4">Stay informed!</h3>
                        <form onSubmit={handleFormSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                    className="mt-1 p-2 w-full border rounded"
                                />
                            </div>
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                                Donate
                            </button>
                        </form>
                    </PopupContent>
                </PopupOverlay>
            )}
        </>
    );
}

export default Header;
