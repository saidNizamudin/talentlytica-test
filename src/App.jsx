import FileSaver from 'file-saver';
import { useState } from 'react';
import styles from './App.module.css';
import exportToJSON from './export';

function App() {
	const [mahasiswa, setMahasiswa] = useState([
		{ nama: '1', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '2', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '3', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '4', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '5', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '6', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '7', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '8', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '9', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
		{ nama: '10', aspek1: 1, aspek2: 1, aspek3: 1, aspek4: 1 },
	]);

	const handleSelect = ({ event, aspek, mhs }) => {
		setMahasiswa((prev) => {
			const newMahasiswa = [...prev];
			const index = newMahasiswa.findIndex((item) => item.nama === mhs);
			newMahasiswa[index][aspek] = parseInt(event.target.value);
			return newMahasiswa;
		});
	};

	const handleSubmit = () => {
		// Export JSON file of mahasiswa
		const json = JSON.stringify(exportToJSON(mahasiswa));
		const blob = new Blob([json], { type: 'application/json' });
		FileSaver.saveAs(blob, 'mahasiswa.json');

		// Reset mahasiswa
		setMahasiswa((prev) => {
			const newMahasiswa = [...prev];
			newMahasiswa.forEach((item) => {
				item.aspek1 = 1;
				item.aspek2 = 1;
				item.aspek3 = 1;
				item.aspek4 = 1;
			});
			return newMahasiswa;
		});
	};

	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<span>Aplikasi Penilaian Mahasiswa</span>
			</div>
			<div className={styles.content}>
				<table className={styles.table}>
					<thead className={styles.thead}>
						<tr>
							<th></th>
							<th>Aspek Penilaian 1</th>
							<th>Aspek Penilaian 2</th>
							<th>Aspek Penilaian 3</th>
							<th>Aspek Penilaian 4</th>
						</tr>
					</thead>
					<tbody className={styles.tbody}>
						{mahasiswa.map((mhs, index) => (
							<tr key={index}>
								<td>
									<img
										src={`https://i.pravatar.cc/150?img=${index}`}
										alt="ava"
										className={styles.avatar}
									/>
									<span>Mahasiswa {mhs.nama}</span>
								</td>
								<td>
									<select
										className={styles.select}
										name={`aspek1_${mhs.nama}`}
										id={`aspek1_${mhs.nama}`}
										value={mahasiswa[index].aspek1}
										onChange={(e) => {
											handleSelect({
												event: e,
												aspek: 'aspek1',
												mhs: mhs.nama,
											});
										}}>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
											<option key={item} value={item}>
												{item}
											</option>
										))}
									</select>
								</td>
								<td>
									<select
										className={styles.select}
										name={`aspek2_${mhs.nama}`}
										id={`aspek2_${mhs.nama}`}
										value={mahasiswa[index].aspek2}
										onChange={(e) => {
											handleSelect({
												event: e,
												aspek: 'aspek2',
												mhs: mhs.nama,
											});
										}}>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
											<option key={item} value={item}>
												{item}
											</option>
										))}
									</select>
								</td>
								<td>
									<select
										className={styles.select}
										name={`aspek3_${mhs.nama}`}
										id={`aspek3_${mhs.nama}`}
										value={mahasiswa[index].aspek3}
										onChange={(e) => {
											handleSelect({
												event: e,
												aspek: 'aspek3',
												mhs: mhs.nama,
											});
										}}>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
											<option key={item} value={item}>
												{item}
											</option>
										))}
									</select>
								</td>
								<td>
									<select
										className={styles.select}
										name={`aspek4_${mhs.nama}`}
										id={`aspek4_${mhs.nama}`}
										value={mahasiswa[index].aspek4}
										onChange={(e) => {
											handleSelect({
												event: e,
												aspek: 'aspek4',
												mhs: mhs.nama,
											});
										}}>
										{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
											<option key={item} value={item}>
												{item}
											</option>
										))}
									</select>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			<div className={styles.button}>
				<button className={styles.saveButton} onClick={handleSubmit}>
					Simpan
				</button>
			</div>
		</div>
	);
}

export default App;
