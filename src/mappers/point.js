exports.pointMapper = ({ user, point }) => ({
    user,
    location: {
        coordinates: point,
        type: 'Point'
    },
    createdAt: new Date()
})
