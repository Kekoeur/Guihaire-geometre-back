// ./config/plugins.ts`
module.exports = {
    'navigation': { enabled: true },
    'graphql': {
        enabled: true,
        config: {
            defaultLimit: 100,  // Définit une nouvelle limite par défaut (actuellement c'est 10)
            maxLimit: 1000,     // Fixe une limite maximale possible pour éviter des abus
        },
    },
};
