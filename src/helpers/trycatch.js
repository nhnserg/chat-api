export const trycatch = controller => {
	const fn = async (req, res, next) => {
		try {
			await controller(req, res, next)
		} catch (error) {
			next(error)
		}
	}

	return fn
}
