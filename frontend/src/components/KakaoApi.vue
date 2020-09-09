<template>
    <div>
        <h1>Translate API</h1>
        <v-container>
        <v-row>
            <v-col cols="8" md="5">
            <v-select :items="lanage" label="번역 대상 언어" outlined
            :rules="[rules.required]"
            item-text="lang" item-value="id" v-model= "src_lang">
            </v-select>
            <v-textarea
            outlined
            name="input-before"
            label="번역 대상 문장"
            v-model="query"
            :rules="[rules.required]">
            </v-textarea>
            </v-col>
            <v-col cols="3" md="1">
                <v-btn @click="translate">번역-></v-btn>
            </v-col>
            <v-col cols="8" md="5">
            <v-select :items="lanage" label="번역 결과 언어" outlined
            :rules="[rules.required]"
            item-text="lang" item-value="id" v-model="target_lang">
            </v-select>
            <v-textarea
            outlined
            name="input-after"
            label="번역결과"
            v-model="result.translated_text">
            </v-textarea>
            </v-col>
        </v-row>
        <p v-if="error" class="error">{{error}}</p>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lanage : [
                {lang : '한국어', id : 'kr'},
                {lang: '영어', id : 'en'},
                {lang: '일본어', id : 'jp'},
                {lang: '중국어', id : 'cn'},
                {lang: '베트남어', id : 'vi'},
                {lang: '인도네시아어', id : 'id'},
                {lang: '아랍어', id :'ar'},
                {lang: '뱅갈어', id :'bn'},
                {lang: '독일어', id :'de'},
                {lang: '스페인어', id :'es'}
            ],
            rules : {
				required : title => !!title || "입력필수"
			},
            src_lang : '',
            target_lang : '',
            query : '',
            result : '',
            error : null
        }
    },
    methods : {
        translate() {
            if(this.src_lang === '' || this.target_lang === '' || this.query === '') {
                alert('입력내용이 부족합니다.')
                return
            }
            this.$axios.get('https://dapi.kakao.com/v2/translation/translate?src_lang=' + this.src_lang + '&target_lang=' + this.target_lang +'&query='+this.query,
                {headers : {
                    Authorization : 'KakaoAK f5669f63f45b42c2c01957adddf89b45'
                }
                })
            .then(response => {
                    this.result = response.data
            }).catch(error => {
                this.error = error
            });
        }
    }
}
</script>
<style>
.error{
	color: white;
	font-size: 25px;
}
</style>