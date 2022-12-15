<script>
    import { createEventDispatcher } from 'svelte';

    let nome = '';
    let telefone = '';

    const dispatch = createEventDispatcher();

    const adicionarContato = (e) => {
        if (nome.trim() === '' || telefone.trim() === '') {
            return;
        }

        dispatch('novo-contato', {
            nome,
            telefone,
        });

        nome = '';
        telefone = '';
    };
</script>

<main>
    <div class="form-contato form-group">
        <p>
            <input
                placeholder="Nome"
                type="text"
                name="nome"
                class="form-control"
                bind:value={nome}
            />
        </p>
        <p>
            <input
                placeholder="Telefone"
                name="telefone"
                class="form-control"
                bind:value={telefone}
            />
        </p>
        <button on:click|preventDefault={adicionarContato} type="submit" class="btn btn-primary">
            Salvar
        </button>
    </div>
</main>

<style>
</style>
