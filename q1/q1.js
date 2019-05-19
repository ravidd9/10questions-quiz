// debouncing




class PlaceSearch extends Component {
	state = {
		q: '',
		places: [],
	}
	debounce = (fn, delay) => {
		let timer = null;
		return function (...args) {
			const context = this;
			timer && clearTimeout(timer);
			timer = setTimeout(() => {
				fn.apply(context, args);
			}, delay);
		};
	}
	fetchTopFiveSuggestions(q) {
		get(`http://www.example.com/places/`, {
			params: { q }
		}).then(response => {
			this.setState({ places: response.data.places });
		});
	}
	constructor(props) {
		super(props);
		this.fetchTopFiveSuggestions = this.debounce(this.fetchPlaces, 200);
	}
	onSearchChange(ev) {
		const q = ev.target.value;
		this.setState({ q: q });
		let topFiveSuggestions = this.fetchTopFiveSuggestions(q);
		showAsAutoComplete(topFiveSuggestions)
	}	
}

let ps1 = new PlaceSearch()
$("#search").keyup(ps1.onSearchChange(e))


