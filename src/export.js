export default function exportTOJSON(mahasiswa) {
	const resultData = mahasiswa.reduce((result, item) => {
		Object.entries(item).forEach(([key, value]) => {
			if (key !== 'nama') {
				const aspekKey = `aspek_penilaian_${key.slice(-1)}`;
				const mhsKey = `mahasiswa_${item.nama}`;

				if (!result[aspekKey]) {
					result[aspekKey] = {};
				}

				result[aspekKey][mhsKey] = value;
			}
		});

		return result;
	}, {});

	return resultData;
}
