<script setup>
    import { useForm,useField} from 'vee-validate'
    import { collection, addDoc } from "firebase/firestore"; 
    import { validationSchema,imageSchema } from '@/validation/propiedadSchema'
    import { useFirestore } from 'vuefire'
    const items = [1, 2, 3, 4, 5]
    const db = useFirestore();
    const { handleSubmit } = useForm({validationSchema : {
        ...validationSchema,
        ...imageSchema
    }})

    const titulo = useField('titulo')
    const imagen=useField('imagen')
    const precio = useField('precio')
    const habitaciones =useField('habitaciones')
    const wc = useField('wc')
    const estacionamiento = useField('estacionamiento')
    const descripcion = useField('descripcion')
    const alberca =useField('alberca')

    const submit = handleSubmit( async(values)=>{
        const {imagen, ...propiedad} = values
        const docRef = await addDoc(collection(db, "propiedades"), {
        name: "Tokyo",
        country: "Japan"
        });
        console.log("Document written with ID: ", docRef.id);

    })

</script>
<template>
    <v-card flat class="mx-auto  my-2" max-width="800">

        <v-card-title class="text-h4 font-weight-bold" tag="h3">
            Nueva Propiedad

        </v-card-title>

        <v-card-subtitle>
            Crea una nueva propiedad llenando el siguiente formulario
        </v-card-subtitle>


        <v-form class="mt-10">

            <v-text-field class="mb-5" label="Titulo Propiedad" 
            v-model="titulo.value.value" :error-messages="titulo.errorMessage.value" />

            <v-file-input accept="image/jpeg" label="Fotografia" prepend-icon="mdi-camera" class="mb-5"
                v-model="imagen.value.value"
                :error-messages="imagen.errorMessage.value"
                />

            <v-text-field class="mb-5" label="Precio" 
                v-model="precio.value.value"
                :error-messages="precio.errorMessage.value"
            />
            <v-row>

                <v-col cols="12" md="4">
                    <v-select label="Habitaciones" class="mb-5" :items="items" 
                        v-model="habitaciones.value.value"
                        :error-messages="habitaciones.errorMessage.value"
                    />
                </v-col>

                <v-col cols="12" md="4">
                    <v-select label="wc" class="mb-5" :items="items"
                        v-model="wc.value.value"
                        :error-messages="wc.errorMessage.value"
                     />
                </v-col>
                <v-col cols="12" md="4">
                    <v-select label="Lugares Estacionamiento" class="mb-5" :items="items" 
                        v-model="estacionamiento.value.value"
                        :error-messages="estacionamiento.errorMessage.value"
                    />
                </v-col>
                </v-row>

                <v-textarea class="mb-5" label="Descripción"
                    v-model="descripcion.value.value"
                    :error-messages="descripcion.errorMessage.value"
                ></v-textarea>

                <v-checkbox
                    label="Alberca?"
                    v-model="alberca"
                />

                <v-btn
                    color="pink-accent-3"
                    block
                    @click="submit"
                >
                    Agregar Propiedad
                </v-btn>
           

        </v-form>


    </v-card>

</template>
