<template>
	<div id="app">
		<HeaderComp
			:propsGeneri="generiPossibili"
			:propsLingue="linguePossibili"
			@emitQuery="emitQueryFunction"
			@emitGenere="sceltaGenere"
			@emitLingua="sceltaLingua"
			@emitRicercaPienaVuota="inputPienoVuoto"
		/>
		<MainComp
			:propsFilm="arrayFilm"
			:propsSeries="arraySerie"
			:linguaFinale="lingua"
			:genereFinale="genere"
			:generiLista="generiPossibili"
			:valoreInput="valoreInput"
		/>
	</div>
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
import MainComp from "./components/MainComp.vue";
import axios from "axios";

export default {
	name: "App",
	data() {
		return {
			apiKey: "ea284f453f6bf939a56b81b5d0741a04",
			query: "&query=",
			arrayFilm: [],
			arraySerie: [],
			generiPossibili: [],
			linguePossibili: [],
			genere: 0,
			lingua: "",
			valoreInput: true,
		};
	},
	components: {
		HeaderComp,
		MainComp,
	},
	methods: {
		emitQueryFunction(emitQueryValore) {
			// Axios per i film
			axios
				.get(
					"https://api.themoviedb.org/3/search/movie?api_key=" +
						this.apiKey +
						this.query +
						emitQueryValore
				)
				.then((response) => {
					this.arrayFilm = response.data.results;
				});

			// Axios per le Serie
			axios
				.get(
					"https://api.themoviedb.org/3/search/tv?api_key=" +
						this.apiKey +
						this.query +
						emitQueryValore
				)
				.then((risultato) => {
					this.arraySerie = risultato.data.results;
				});
		},
		sceltaGenere(valoreEmitSceltaGenere) {
			this.genere = valoreEmitSceltaGenere;
		},
		sceltaLingua(valoreEmitSceltaLingua) {
			this.lingua = valoreEmitSceltaLingua;
		},
		inputPienoVuoto(valoreEmitInputPienoVuoto) {
			this.valoreInput = valoreEmitInputPienoVuoto;
		},
	},
	mounted() {
		// Axios Generi
		axios
			.get(
				" https://api.themoviedb.org/3/genre/movie/list?api_key=" +
					this.apiKey
			)
			.then((response) => {
				this.generiPossibili = response.data.genres;
			});

		// Axios Lingue
		axios
			.get(
				"https://api.themoviedb.org/3/configuration/languages?api_key=" +
					this.apiKey
			)
			.then((response) => {
				this.linguePossibili = response.data;
			});
	},
};
</script>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
