import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { Button, TablePagination } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
export default function BasicTable({ rows, onDelete, onEdit }) {
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(5);

	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
	const handleChangePage = (event, newPage) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};
	return (
		<TableContainer component={Paper}>
			<Table sx={{ minWidth: 650 }} aria-label='simple table'>
				<TableHead>
					<TableRow>
						<TableCell align='center'>Name</TableCell>
						<TableCell align='center'>Email</TableCell>
						<TableCell align='center'>Phone</TableCell>
						<TableCell align='center'>Operation</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{(rowsPerPage > 0
						? rows.slice(
								page * rowsPerPage,
								page * rowsPerPage + rowsPerPage
						  )
						: rows
					).map((row) => (
						<TableRow
							key={row.id}
							sx={{
								"&:last-child td, &:last-child th": {
									border: 0,
								},
							}}
						>
							<TableCell
								component='th'
								scope='row'
								align='center'
							>
								{row.name}
							</TableCell>
							<TableCell align='center'>{row.email}</TableCell>
							<TableCell align='center'>{row.phone}</TableCell>
							<TableCell align='center'>
								<Stack
									direction='row'
									spacing={2}
									sx={{
										justifyContent: "center",
									}}
								>
									<Button
										variant='contained'
										endIcon={<EditIcon />}
										onClick={() => onEdit(row.id)}
									>
										Edit
									</Button>
									<Button
										variant='outlined'
										startIcon={<DeleteIcon />}
										onClick={() => onDelete(row.id)}
										color='error'
									>
										Delete
									</Button>
								</Stack>
							</TableCell>
						</TableRow>
					))}
					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
			</Table>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25]}
				component='div'
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={handleChangePage}
				onRowsPerPageChange={handleChangeRowsPerPage}
			/>
		</TableContainer>
	);
}
