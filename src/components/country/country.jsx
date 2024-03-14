import './country.css';
const Country = ({country}) => {
    const {name, flags, capital, population, area} = country;
    return (
        <div className='country'>
            <img src={flags?.png} alt="" />
            <h3>Name: {name?.common}</h3>
            <h4>Capital: {capital}</h4>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
              
        </div>
    );
};

export default Country;